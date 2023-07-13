'use client'
import React from 'react'
import { Select2 } from "select2-react-component";
import "select2-component/dist/select2.min.css";

function Inputselect(props) {
    return (
      <nav className={`w-full ${props?.className}`}>
          <Select2 class="!p-5" customSearchEnabled={props.customSearchEnabled} placeholder={props.placeholder} data={props.data ?  [...props?.data]: []}
            value={props?.value}
            update={value =>props?.onChange &&  props?.onChange({target:{value: value}})}>
        </Select2>
        {props?.error && <span className="block  w-full text-red-500 text-xs">{props?.error}</span>}
      </nav>
    )
}

export default Inputselect