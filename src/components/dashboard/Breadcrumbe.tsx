type TBreadcrumbe = {
   title: string;
}

const Breadcrumbe = ({ title }: TBreadcrumbe) => {
   return (
      <div className="py-2">
         <h2 className="h3-bold text-left text-black">{title}</h2>
      </div>
   )
}

export default Breadcrumbe
