import { Link } from 'react-router-dom'
import './login.css'

export const Login = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    const removeLocalSorage = () =>{
        localStorage.setItem('user',JSON.stringify('lock'))
    }
    return (
        <div className="sign">
            <div className='signpage'>
            {/* <Link to={'/email'}><button>Sign in</button></Link> */}
               {user==='lock'?<Link to={'/email'}><button>Sign in</button></Link>:<>
                  <div className='loginIcons'>
                    <div>
                        <img width={'45px'} height={'45px'} style={{borderRadius:'50%', margin:'20px 0px'}} src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1649026627&Signature=B-rHzht352brIZyVMi4TPGncvtFkDLSz~oJj7I-f96Guqzmj-HPZZmj8jOqzCxDL~Ya59hpr8Q7EsLfJVGAHknQ2DSVRDaC4HY0g3wuiysJo7YKlR98FbdxvvucjvjHxtZNi7OthUn3TPhqNkRtt6RzDdklIe62-yksA0mX9h4Y9XMn2wZ~ED~~-hwdBveOxktY7nyrfyeAEUrdqfW~29nyyMjqszZz0rIu6nCS4YIGj8tzeYnetqu3vUMeykIcic3xS4PiCsTfIIsQCQjK0BR67VMWokdIyZ0R2kSEffGJuFXv0hKYsET~p~TVtLWE6aKlCbNkeOGu1zR4tCuMAKA__&Key-Pair-Id=APKAJSDH2OZQQSA64LQQ" alt="" />
                        <div  style={{fontSize:'16px', fontWeight:'500',lineHeight:'24px',marginTop:'30px'}}>{user.user.firstName}</div>
                    </div>
                    <div >
                        <div><svg width={'20px'} aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc" ><path d="M4.5 2.833v18.333l4.583-2.5 2.917 2.5 2.917-2.5 4.583 2.5V2.833h-15zM16.167 9.5H7.833V7h8.334v2.5z"></path></svg></div>
                        <div>Orders</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc"><path d="M17 3c-2.2 0-3.8 1.2-5 2.5C10.8 4.3 9.2 3 7 3 3.5 3 1 5.9 1 9.5c0 1.8.7 3.4 2 4.5l9 8.5 9-8.5c1.2-1.2 2-2.7 2-4.5C23 5.9 20.5 3 17 3z" ></path></svg></div>
                        <div>Favorites</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc" ><path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3z" ></path>,<path d="M1 4v4h7.12l3 3h1.76l3-3H23V4H1z" ></path></svg></div>
                        <div>Wallet</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc" ><path fillRule="evenodd" clipRule="evenodd" d="M12 7.833c-.667 0-1.334.166-1.917.5L6.5 4.749C8 3.583 9.917 2.916 12 2.916s4 .667 5.5 1.833l-3.583 3.584a3.871 3.871 0 00-1.917-.5zm3.666 6.083c.334-.583.5-1.25.5-1.917 0-.666-.166-1.333-.5-1.916l3.584-3.584c1.166 1.5 1.833 3.417 1.833 5.5 0 2.084-.666 4-1.833 5.5l-3.584-3.583zm-1.75 1.75c-.583.333-1.25.5-1.916.5a3.872 3.872 0 01-1.917-.5L6.5 19.25c1.5 1.167 3.417 1.834 5.5 1.834s4-.667 5.5-1.834l-3.583-3.583zM2.834 12c0-2.083.667-4 1.834-5.5l3.583 3.584c-.333.583-.5 1.25-.5 1.916 0 .667.167 1.334.5 1.917L4.667 17.5C3.5 16 2.833 14.083 2.833 12z" ></path></svg></div>
                        <div>Help</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb cc" ><path d="M11.333 22l10-10V3.667H13l-10 10L11.333 22z" ></path></svg></div>
                        <div>Promotions</div>
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca cb oe" ><path d="M2.834 18.666h18.333V14.5c-1.416 0-2.5-1.084-2.5-2.5 0-1.417 1.167-2.5 2.5-2.5V5.333H2.834V9.5c1.417 0 2.5 1.083 2.5 2.5 0 1.333-1.167 2.5-2.5 2.5v4.166z" fill='green' ></path></svg></div>
                        
                            <div style={{color:"green"}}>uber Pass</div>
                            {/* <div>Join free for 1 month</div> */}
                       
                    </div>
                    <div>
                        <div><svg width={'20px'}  aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="c9 ca cb cc" ><path fillRule="evenodd" clipRule="evenodd" d="M6.875 0c.7 0 1.342.267 1.825.708L10 1.892 11.3.708A2.698 2.698 0 0113.125 0a2.714 2.714 0 012.709 2.708 2.74 2.74 0 01-.425 1.459h2.925V10H11.25V4.167h-2.5V10H1.667V4.167h2.925a2.74 2.74 0 01-.425-1.459A2.714 2.714 0 016.875 0zM8.75 12.5H1.667v5.833H8.75V12.5zm2.5 5.833h7.084V12.5H11.25v5.833z" ></path></svg></div>
                        <div>Invite friends</div>
                    </div>
                  </div>
                  <div onClick={removeLocalSorage}>sign Out</div>
                  <hr />
           
               
               
               </>}
                <div>Create a bussiness account</div>
                <div>Add your restaurant</div>
                <div>Sign up to deliver</div>
            </div>
         <div className='signpage2'>
             <div>
                 <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d524e619911872cb8ff783bcd7ab4290.svg" alt="" />
                 <p>There's more to love in the app</p>
             </div>
             <div>
                 <div className='ibtn' style={{display:'flex', gap:'5px'}}>
                 <svg width='20px' aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca bz cb"><path fillRule="evenodd" clipRule="evenodd" d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"></path></svg>
                  <div>iPhone</div>
                  </div>
                 <div className='ibtn' style={{display:'flex', gap:'5px'}}>
                    <svg width='20px' aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="c9 ca bz cb"><g><path fillRule="evenodd" clipRule="evenodd" d="M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z"></path><path d="M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z"></path></g></svg>
                    <div>Android</div> 
                </div>
             </div>
         </div>
        </div>
    )
}