import { PersonaDetail } from "ui/pages/personaDetail";
import { accessories } from "./ui/pages/dummy";
import { people } from "application/dummy";

export default function PersonaDetailPage() {
  return (
    <PersonaDetail
      swagProps={{
        swags: accessories,
      }}
      personas={people}
      profileProps={{
        linkedRecords: ["org.telegram"],
        onLink(url, username) {},
        onUnlink(url) {},
      }}
      soulboundProps={{
        categories: [{ name: "general", label: "General" }],
        tokens: [
          {
            label: "US Open Men’s Final",
            name: "tenis",
            platform: "others",
            timestamp: Date.now(),
            score: 0.5,
            image: "/assets/bounds/bound1.png",
          },
          {
            label: "T-mobil",
            name: "tenis",
            platform: "others",
            timestamp: Date.now(),
            score: 0.5,
            image: "/assets/bounds/bound2.png",
          },
          {
            label: "Spotify Single",
            name: "music",
            platform: "others",
            timestamp: Date.now(),
            score: 0.5,
            image: "/assets/bounds/bound3.png",
          },
          {
            label: "X Tweet",
            name: "tenis",
            platform: "others",
            timestamp: Date.now(),
            score: 0.5,
            image: "/assets/bounds/bound4.png",
          },
        ],
      }}
    />
  );
}
