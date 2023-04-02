import { useEffect, useRef, useState } from 'react'
import { CanceledError } from '../services/apiClient'
import workOrderService, { WorkOrder } from '../services/WorkOrderService'

const WorkOrderList = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const { request, cancel } = workOrderService.getAllWorkOrders()
    request.then(res => {
      setWorkOrders(res.data)
      setIsLoading(false)
    })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })
    return () => cancel()
  }, [])

  return (
    <>
      <h1>WorkOrderList</h1>
      <ul>
        {workOrders.map((workOrder) => (
          <li key={workOrder.id}>{workOrder.site}</li>
        ))}
      </ul>
    </>
  )
}
export default WorkOrderList