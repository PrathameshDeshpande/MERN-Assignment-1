import React from 'react'
import img6 from "../assests/img6.jpg";
import info from "./info.css"

export default function Info() {
  return (



    <div className='info-img'>
     <div>
      <h2 className='tc underline'>Welcome to the SRM Career Centre</h2>
<p className='para pa3'>Students are encouraged to seek the opportunities and enhance their learning experience with a practical knowledge. The Career Centre provides a platform for the students and the companies as well so that the collaboration is mutually beneficial.

Once a student enters this University, the Institution takes the entire responsibility to develop that individual into a personality. The students are overwhelmed with the opportunities they are provided with. They are left open to a humpty number of choices lying in front of them to choose in parallel to their academics. SRM believes in enhancing its students through dedicated concentration on each and every student and sees to that everyone enhances their talents with the opportunities they are provided with. 

Once the placement season commences, one can feel the vibrant environment on the campus. Talents go barely unrecognized in the SRM Institute of Science and Technology (formerly known as SRM University) as we leave no stone unturned, to place our students.</p>
     </div>


<img src={img6} alt='img'/>
    </div>
  )
}
