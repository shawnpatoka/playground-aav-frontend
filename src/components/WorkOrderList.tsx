import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CanceledError } from '../services/api-client'
import workOrderService, { WorkOrderListItem } from '../services/work-order-service'

const WorkOrderList = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrderListItem[]>([])
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
      <ul>
        {workOrders.map((workOrder) => (
          <li className="mb-3" key={workOrder.id}>
            <Link to={"/work-orders/" + workOrder.id}><strong>{workOrder.site}</strong><br />Assigned to: {workOrder.assigned_to.last_name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default WorkOrderList