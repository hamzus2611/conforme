import React from "react";

import * as AiIcons from "react-icons/ai";

import * as GoIcons from "react-icons/go";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
    {
        title:'Home',
        path:'/menu',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Create new project',
        path:'/newProject',
        icon:<AiIcons.AiOutlineAppstoreAdd/>,
        cName:'nav-text'
    },
    {
        title:'List of projects',
        path:'/projects',
        icon:<AiIcons.AiOutlineOrderedList/>,
        cName:'nav-text'
    },
    {
        title:'Conformity ISO 27001',
        path:'/conform',
        icon:<GoIcons.GoChecklist/>,
        cName:'nav-text'
    },
    {
        title:'Statistic',
        path:'/stat',
        icon:<FcIcons.FcStatistics/>,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/home',
        icon:<AiIcons.AiOutlineLogout/>,
        cName:'nav-text'
    },
]
