import {
  afterPatch,
  findInReactTree,
  appDetailsClasses,
  createReactTreePatcher,
  PanelSection
} from '@decky/ui'
import { routerHook } from '@decky/api';
import React, { ReactElement } from 'react'


function awesomePanel(){
  return(
    <PanelSection>
      <div>Hello World and awesome people</div>
    </PanelSection>
  )
}


export default function create_new_route(){
    return routerHook.addRoute('/library/app/newdata', awesomePanel)
    // return routerHook.addPatch('/library/app/:appId', (props: {path: string; children: ReactElement}) =>{
    //     //DO WORK TO FIND SPECIFIC ELEMENT
    //     return props
    // })
}