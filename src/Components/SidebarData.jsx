import React from 'react'
import HexagonIcon from '@mui/icons-material/Hexagon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BadgeIcon from '@mui/icons-material/Badge';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import KitchenIcon from '@mui/icons-material/Kitchen';
export const SidebarData = [
    {
        title: "Departamentler",
        icon: <HexagonIcon />,
        link: "/Departamentler"
    },
    {
        title: "Şöbələr",
        icon: <DashboardIcon />,
        link: "/Sobeler"
    },
    {
        title: "İşçi Heyəti",
        icon: <BadgeIcon />,
        link: "/Isciheyeti"
    },
    {
        title: "Sinif",
        icon: <MeetingRoomIcon />,
        link: "/Sinif"
    },
    {
        title: "Şagird",
        icon: <SchoolIcon />,
        link: "/Sagird"
    },
    {
        title: "Qonaqlar",
        icon: <PeopleIcon />,
        link: "/Qonaqlar"
    },
    {
        title: "Qr Hesabat",
        icon: <QrCode2Icon />,
        link: "/Qrhesabat"
    },
    {
        title: "Mətbəx",
        icon: <KitchenIcon />,
        link: "/Metbex"
    }
]
