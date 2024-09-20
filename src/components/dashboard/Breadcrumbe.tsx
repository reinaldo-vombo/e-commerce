type TBreadcrumbe = {
   title: string;
   actionButton?: any
}

const Breadcrumbe = ({ title, actionButton }: TBreadcrumbe) => {
   return (
      <div className="py-2 flex items-center justify-between">
         <h2 className="h3-bold text-left text-black">{title}</h2>
         <div>
            {actionButton && actionButton}
         </div>
      </div>
   )
}

export default Breadcrumbe
