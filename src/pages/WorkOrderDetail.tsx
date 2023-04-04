import { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom"
import { CanceledError } from '../services/api-client'
import workOrderService, { WorkOrder } from '../services/work-order-service'

const WorkOrderDetail = () => {
  const [workOrder, setWorkOrder] = useState<WorkOrder>()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const { request, cancel } = workOrderService.getWorkOrderDetail(parseInt(id!))
    request.then(res => {
      setWorkOrder(res.data)
      setIsLoading(false)
      document.title = workOrder ? `${workOrder.site} | Work Order System` : "Work Order System"
    })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        // setIsLoading(false)
      })
    return () => cancel()
  }, [])


  if (!workOrder || isLoading) {
    return <h1>Loading...</h1>
  }

  else {
    return (
      <>
        <h1>WorkOrderDetail - {id}</h1>
        <hr />
        <h3>{workOrder.site}</h3>
        <p><strong>Date:</strong> {workOrder.date}</p>
        <p><strong>Status:</strong> {workOrder.status}</p>
        <p><strong>Description:</strong> {workOrder.description}</p>
        <p><strong>Parts Used:</strong> {workOrder.parts_used}</p>
        <p><strong>Work Completed:</strong> {workOrder.work_completed}</p>
      </>
    )
  }
}
export default WorkOrderDetail