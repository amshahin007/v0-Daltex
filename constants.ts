
import { User, Location, Sector, Division, MaintenancePlan, Machine, Item, IssueRecord, BreakdownRecord, MaintenanceTask, MaintenanceSchedule, MaintenanceWorkOrder, PurchaseOrder } from './types.ts';

export const DEFAULT_NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Home Page',
    icon: '🏠',
    roles: ['admin', 'user', 'warehouse_manager', 'maintenance_manager', 'maintenance_engineer', 'warehouse_supervisor']
  },
  {
    id: 'maintenance-planning',
    label: 'Maintenance Planning',
    icon: '📅',
    roles: ['admin', 'maintenance_manager', 'maintenance_engineer']
  },
  {
    id: 'issue-planning',
    label: 'Issue Planning',
    icon: '📝',
    roles: ['admin', 'maintenance_manager', 'warehouse_manager']
  },
  {
    id: 'asset-management',
    label: 'Asset Management',
    icon: '🏗️',
    roles: ['admin', 'maintenance_manager', 'maintenance_engineer']
  },
  {
    id: 'mro-management',
    label: 'MRO Management',
    icon: '🛠️',
    roles: ['admin', 'warehouse_manager', 'maintenance_manager', 'maintenance_engineer', 'warehouse_supervisor']
  },
  {
    id: 'material-forecast',
    label: 'Forecast Planning',
    icon: '🔮',
    roles: ['admin', 'warehouse_manager', 'maintenance_manager', 'maintenance_engineer']
  },
  {
    id: 'agri-work-order',
    label: 'Work Orders',
    icon: '🚜',
    roles: ['admin', 'warehouse_manager', 'maintenance_manager', 'user']
  },
  {
    id: 'issue-form',
    label: 'Issue Requests',
    icon: '🧾',
    roles: ['admin', 'user', 'maintenance_manager', 'maintenance_engineer']
  },
  {
    id: 'history',
    label: 'Inventory',
    icon: '📋',
    roles: ['admin', 'user', 'warehouse_manager', 'maintenance_manager', 'maintenance_engineer', 'warehouse_supervisor']
  },
  {
    id: 'stock-approval',
    label: 'Approvals',
    icon: '✅',
    roles: ['admin', 'warehouse_manager', 'warehouse_supervisor']
  },
  {
    id: 'ai-assistant',
    label: 'Maintenance AI',
    icon: '✨',
    roles: ['admin', 'warehouse_manager', 'maintenance_manager']
  },
  {
    id: 'master-data',
    label: 'Master Data',
    icon: '🗄️',
    roles: ['admin']
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    roles: ['admin']
  },
];

export const USERS: User[] = [
  {
    username: 'admin',
    name: 'Admin User',
    role: 'admin',
    email: 'admin@daltex.com',
    password: 'admin'
  }
];

export const LOCATIONS: Location[] = [];
export const SECTORS: Sector[] = [];
export const DIVISIONS: Division[] = [];
export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  { id: 'MP-001', name: 'Periodic Maintenance (صيانة دورية)' },
  { id: 'MP-002', name: 'Preventive Maintenance (صيانة وقائية)' },
  { id: 'MP-003', name: 'Sudden Breakdown (صيانة اعطال فجائية)' },
  { id: 'MP-004', name: 'Repair Maintenance (صيانة اصلاح)' },
  { id: 'MP-005', name: 'Overhauls (عمرات)' },
  { id: 'MP-006', name: 'Annual Maintenance (صيانة سنوية)' },
  { id: 'MP-007', name: 'Investment Project (مشروع استثماري)' },
];
export const MACHINES: Machine[] = [];
export const ITEMS: Item[] = [];
export const INITIAL_PURCHASE_ORDERS: PurchaseOrder[] = [];
export const INITIAL_HISTORY: IssueRecord[] = [];
export const INITIAL_BREAKDOWNS: BreakdownRecord[] = [];
export const INITIAL_TASKS: MaintenanceTask[] = [];
export const INITIAL_SCHEDULES: MaintenanceSchedule[] = [];
export const INITIAL_MAINTENANCE_WOS: MaintenanceWorkOrder[] = [];

export const DEFAULT_SCRIPT_URL = "";
