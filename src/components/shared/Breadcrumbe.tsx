type TBreadcrumb = {
   coverImage?: string
   title?: string
   video?: string
}
const Breadcrumbe = ({ coverImage, title, video }: TBreadcrumb) => {
   return (
      <div className="relative bg-gray-200">
         <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${coverImage})` }} />
         <div className="absolute bottom-0 w-full overflow-hidden leading-[0] transform translate-y-[3.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-full' width="1440" height="131" viewBox="0 0 1440 131" fill="none">
               <path d="M-194 0C516.557 96.6467 915.089 93.8887 1626 10.2282V131H-194V0Z" fill="white" />
            </svg>
         </div>
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {title && (
               <div className="text-center">
                  <h1 className="text-white text-5xl font-bold mb-4">{title}</h1>
               </div>
            )}
            {video && (
               <div className="absolute inset-0">
                  <video className="w-full h-full" autoPlay={true} muted={true} loop={true} controls={false}>
                     <source src={video} />
                  </video>
               </div>
            )}
         </div>
      </div>
   )
}

export default Breadcrumbe
