import { LayoutDashboard , FolderKanban, FileLock} from "lucide-react";

export const SIDE_MENU_LIST = [
    {name: 'dashboard', title: 'Dashboard', icon: LayoutDashboard},
    {name: 'project', title: 'Project', icon: FolderKanban},
    {name: 'divider'},
    {name: 'logs', title: 'Logs', icon: FileLock},    
];

export type NavMenuItem = typeof SIDE_MENU_LIST[0]; 