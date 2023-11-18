import { people } from "application/dummy";
import { Home } from "ui/pages/home";
import { IPersonaLink, platforms } from "ui/pages/home/Mint/Account";
import { IPersona } from "ui/types";
import { accessories } from "../dummy";

export default function AppHome() {
  const myPersona = structuredClone(people).splice(0, 3) as IPersona[];
  const connections: Record<string, IPersonaLink[]> = {};
  myPersona.forEach((persona) => {
    connections[persona.ens] = [];
    for (let index = 0; index < platforms.length; index++) {
      const platform = platforms[index];
      if (persona.texts?.[platform.url]) {
        connections[persona.ens].push({
          ens: persona.ens,
          url: platform.url,
          value: persona.texts?.[platform.url] || "",
        });
      }
    }
  });
  return (
    <Home
      onBuyItem={(wearable) => {
        console.log({ wearable });
      }}
      connectedPersona={myPersona?.[0]}
      marketPlaceProps={{
        async fetchAccessories(category) {
          return accessories;
        },
      }}
      allPersonaLinks={connections}
      mintProps={{
        async onMint(data) {
          return new Promise<boolean>((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 5000);
          });
        },
        accountProps: {
          personas: structuredClone(people).splice(0, 3),
        },
        categoryProps: {
          gitCatProps: {
            async getCategory(gitCat) {
              switch (gitCat) {
                case "stars":
                  return [
                    {
                      name: "RocketChat / Rocket.Chat",
                      description:
                        "The communications platform that puts data protection first.",
                      languages: [{ name: "Typescript", color: "#3B82F6" }],
                      lastUpdateTimestamp: Date.now(),
                      commits: 3444,
                      stars: 3440,
                    },
                    {
                      name: "juspay / hyperswitch",
                      description:
                        "An open source payments switch written in Rust to make payments fast, reliable and affordable",
                      languages: [{ name: "Rust", color: "#CA8A04" }],
                      lastUpdateTimestamp: Date.now(),
                      commits: 6098,
                      stars: 1255,
                    },
                  ];
                default:
                  return [];
              }
            },
          },
        },
      }}
      people={people}
      myPersonas={structuredClone(people).splice(0, 3)}
      sendTransferProps={{
        balance: 20000,
        fiatBalance: 300000,
        tokens: [{ symbol: "ETH", name: "Ethereum", address: "0x", image: "" }],
        onSend(tx) {
          console.log(tx);
        },
      }}
    />
  );
}
