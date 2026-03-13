import {
  ButtonItem,
  DialogBody,
  Navigation,
  PanelSection,
  PanelSectionRow,
  staticClasses
} from "@decky/ui";
import {
  addEventListener,
  removeEventListener,
  callable,
  definePlugin,
  toaster,
  routerHook,
  // routerHook
} from "@decky/api"
import { useState } from "react";
import {FaSuperpowers} from "react-icons/fa"; //FONT AWESOME Icons https://fontawesome.com/
import patchBPM from "./patchBPM";
import create_new_route from "./new_route";


// import logo from "../assets/logo.png";

// This function calls the python function "add", which takes in two numbers and returns their sum (as a number)
// Note the type annotations:
//  the first one: [first: number, second: number] is for the arguments
//  the second one: number is for the return value
const add = callable<[first: number, second: number], number>("add");

// This function calls the python function "start_timer", which takes in no arguments and returns nothing.
// It starts a (python) timer which eventually emits the event 'timer_event'
const startTimer = callable<[], void>("start_timer");

function Content() {
  const [result, setResult] = useState<number | undefined>();

  const onClick = async () => {
    const result = await add(Math.random(), Math.random());
    setResult(result);
  };

  return (
    <PanelSection title="Panel Section">
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={onClick}
        >
          {result ?? "Add two numbers via Python"}
        </ButtonItem>
      </PanelSectionRow>
      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => startTimer()}
        >
          {"Start Python timer"}
        </ButtonItem>
        
      </PanelSectionRow>

      <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={()=>{
            Navigation.Navigate("/library/app/newdata")
          }}
        >
          {"Navigatesa"}
        </ButtonItem>
        
      </PanelSectionRow>


         <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={()=>{
            Navigation.NavigateToAppProperties()
          }}
        >
          {"BOOM"}
        </ButtonItem>
        
      </PanelSectionRow>
    </PanelSection>
  );
};



export default definePlugin(() => {
  console.log("Init")

  // routerHook.addRoute('/library/app/newdata', DialogBody) //replace panelsection with actual component 
  
  // Add an event listener to the "timer_event" event from the backend
  create_new_route()
  const BPMPatch = patchBPM() //Big Picture Mode Patch
  
  return {
    name: "Mission Plugin", 
    titleView: <div className={staticClasses.Title}>Mission Viewing Plugin</div>, // The element displayed at the top of your plugin's menu
    content: <Content />, // The content of your plugin's menu (don't really need)
    icon: <FaSuperpowers/>, // The icon displayed in the plugin list
    onDismount() { // The function triggered when your plugin unloads
      console.log("Unloading Plugin")
      routerHook.removePatch('/library/app/:appid', BPMPatch);
      routerHook.removeRoute("/library/app/newdata");
    },
  };
});
