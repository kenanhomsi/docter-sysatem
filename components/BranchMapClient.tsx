"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useTranslations } from "next-intl";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

type LatLng = { lat: number; lon: number };

const DEFAULT_CENTER: LatLng = { lat: 33.5138, lon: 36.2765 }; // Damascus

function parseLatLng(row: unknown): LatLng | null {
  if (!row || typeof row !== "object") return null;
  const r = row as Record<string, unknown>;
  const lat = Number(r.lat);
  const lon = Number(r.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return { lat, lon };
}

async function geocode(address: string, signal: AbortSignal): Promise<LatLng | null> {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("q", address);

  const res = await fetch(url.toString(), {
    method: "GET",
    signal,
    headers: {
      Accept: "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) return null;
  const data = (await res.json()) as unknown;
  if (!Array.isArray(data) || data.length === 0) return null;
  return parseLatLng(data[0]);
}

function cacheKey(address: string) {
  return `branch-geocode:v1:${address}`;
}

export function BranchMapClient({
  address,
  className,
}: {
  address: string;
  className?: string;
}) {
  const t = useTranslations();
  const [pos, setPos] = useState<LatLng | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x.src ?? (markerIcon2x as unknown as string),
      iconUrl: markerIcon.src ?? (markerIcon as unknown as string),
      shadowUrl: markerShadow.src ?? (markerShadow as unknown as string),
    });
  }, []);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    async function run() {
      setStatus("loading");

      try {
        const key = cacheKey(address);
        const cached = window.sessionStorage.getItem(key);

        if (cached) {
          const parsed = JSON.parse(cached) as unknown;
          const cachedPos = parseLatLng(parsed);
          if (cachedPos && mounted) {
            setPos(cachedPos);
            setStatus("ready");
            return;
          }
        }

        const geocoded = await geocode(address, controller.signal);
        if (!mounted) return;

        if (geocoded) {
          setPos(geocoded);
          setStatus("ready");
          window.sessionStorage.setItem(key, JSON.stringify(geocoded));
        } else {
          setPos(null);
          setStatus("error");
        }
      } catch {
        if (!mounted) return;
        setPos(null);
        setStatus("error");
      }
    }

    run();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [address]);

  const center = useMemo(() => {
    const p = pos ?? DEFAULT_CENTER;
    return [p.lat, p.lon] as [number, number];
  }, [pos]);

  return (
    <div className={className}>
      <div className="branch-map__frame">
        <MapContainer
          center={center}
          zoom={pos ? 15 : 11}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          zoomControl={false}
          attributionControl={false}
          className="branch-map__container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {pos ? <Marker position={[pos.lat, pos.lon]} /> : null}
        </MapContainer>

        {status !== "ready" ? (
          <div className="branch-map__overlay" aria-hidden="true">
            <div className="branch-map__shimmer" />
            <div className="branch-map__label">
              {status === "loading" ? t("branches.map.loading") : t("branches.map.unavailable")}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

