import { PanelSection, PanelSectionRow } from '@decky/ui';
import { routerHook } from '@decky/api';

export const NEW_ROUTE_PATH = '/decky-plugin-test';

// Small panel that appears when navigating to NEW_ROUTE_PATH
function NewRoutePanel() {
  return (
    <PanelSection title="New Panel">
      <PanelSectionRow>
        <div>Hello from the new route!</div>
      </PanelSectionRow>
    </PanelSection>
  );
}

export default function addNewRoute() {
  routerHook.addRoute(NEW_ROUTE_PATH, NewRoutePanel);
}