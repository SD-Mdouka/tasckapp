import { Status } from "@prisma/client";

interface StatusBadgeProps {
  status : Status;
}

const StatusBadge = ({ status} :StatusBadgeProps) => {

  const statusColor = status === Status.TODO 
  ? "#450a0a" 
  : status === Status.IN_PROGRESS
  ? "#422006"
  : "#052e16" 
  const statusBgColor = status === Status.TODO 
  ? "#f87171" 
  : status === Status.IN_PROGRESS
  ? "#facc15"
  : "#4ade80"
  return (
    <div
     style={{
      padding:"4px 8px 4px 8px" ,width: 'min-content',
      borderRadius: '0.5rem' ,fontWeight: '600',
      backgroundColor:`${statusBgColor}`,color:`${statusColor}`}}
     className={`${statusColor} bg-green-400 text-green-950 py-1 px-2 w-min rounded-lg font-semibold`}>
        {status.toString()}
    </div>
  )
}

export default StatusBadge;
