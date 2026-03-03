import {
  afterPatch,
  findInReactTree,
  appDetailsClasses,
  createReactTreePatcher,
  PanelSection
} from '@decky/ui'
import { routerHook } from '@decky/api';
import React, { ReactElement } from 'react'

export default function new_route(){
    return routerHook.addRoute('library/app/newdata', PanelSection)
    // return routerHook.addPatch('/library/app/:appId', (props: {path: string; children: ReactElement}) =>{
    //     //DO WORK TO FIND SPECIFIC ELEMENT
    //     return props
    // })
}