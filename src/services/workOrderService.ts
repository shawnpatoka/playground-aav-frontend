import apiClient from "./apiClient";


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

class WorkOrderService {
  getAllWorkOrders() {
    const controller = new AbortController()
    const request = apiClient.get<WorkOrder[]>('work-orders/', { signal: controller.signal })
    return { request, cancel: () => controller.abort() }
  }
}

export default new WorkOrderService()