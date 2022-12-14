import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//to integrate any app to the container
export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
       const { onParentNavigate } =  mount(ref.current, {
            initialPath: history.location.pathname, //to trickle down the current path to sub app on page load
            onNavigate: ({pathname: nextPathname}) => {
                const { pathname } = history.location;
                if(pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    },[]);
    return <div ref={ref} />;
}