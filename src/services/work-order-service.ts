import apiClient from "./api-client";


export interface WorkOrder {
  id: number
  site: string
  created_at: string
  status: string
  description: string
  parts_used: string
  work_completed: string
  work_to_be_completed: string
  date: string
  work_time_start: string
  work_time_end: string
  arrival: string
  est_completion: string
  is_emergency: boolean
}

export interface WorkOrderListItem {
  id: number
  site: string
  status: string
  arrival: string
  est_completion: string
  assigned_to: {
    id: number
    last_name: string
  }
}

class WorkOrderService {
  getAllWorkOrders() {
    const controller = new AbortController()
    const request = apiClient.get<WorkOrderListItem[]>('work-orders/', { signal: controller.signal })
    return { request, cancel: () => controller.abort() }
  }
}

export default new WorkOrderService()