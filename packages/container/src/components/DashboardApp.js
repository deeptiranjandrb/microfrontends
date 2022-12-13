import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
//to integrate any app to the container
export default () => {
    const ref = useRef(null);
    useEffect(() => {
       mount(ref.current);
    },[]);
    return <div ref={ref} />;
}