import {
  afterPatch,
  findInReactTree,
  appDetailsClasses,
  createReactTreePatcher,
  findClass,
  findClassByName
} from '@decky/ui'
import { routerHook } from '@decky/api';
import React, { ReactElement } from 'react'

//routerhook has inject css method
export default function patchBPM(){
    return routerHook.addPatch('/library/app/:appid', (routerTree: any) =>{
        const routeProps = findInReactTree(
            routerTree,
            (x: any) => x?.renderFunc
        );

        if (routeProps){

            const patchHandler = createReactTreePatcher( //this is what does the patching work
                //look at the react tree before patching in

            )



            afterPatch(routeProps, 'renderFunc', patchHandler);
        }

        return routeProps
    })
}
    