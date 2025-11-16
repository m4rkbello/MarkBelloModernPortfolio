import React from "react";
import ReactDOM from "react-dom/client";

import SplitText from "../src/reactbits/SplitText";
import CircularText from "../src/reactbits/CircularText";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "./components/ui/card";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./components/ui/navigation-menu";

function App() {
  return (
    <div className="p-10">
      
      {/* NAVIGATION MENU */}
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-56">
                <p className="font-semibold">Menu 1 Content</p>
                <p className="text-sm text-muted-foreground">
                  This is the dropdown for Menu 1.
                </p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-56">
                <p className="font-semibold">Menu 2 Content</p>
                <p className="text-sm text-muted-foreground">
                  Another dropdown example.
                </p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuIndicator />

        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenu>

      {/* CARD */}
      <Card className="w-[400px] mx-auto mt-10">
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
          <CardDescription>This is a shadcn card imported manually.</CardDescription>
        </CardHeader>

        <CardContent>
          <SplitText
            text="Animated Text"
            className="text-xl font-bold"
            delay={100}
            duration={0.6}
            splitType="chars"
          />
        </CardContent>

        <CardFooter>
          <CircularText text="REACT*BITS*" spinDuration={12} />
        </CardFooter>
      </Card>

    </div>
  );
}


ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
