import './footer.css'
export const Footer = () =>{
    const footer = ['Ger Help','Restaurants near me','Buy gift cards','Vies all cities','Add your restaurant','View all countries','Sign up to deliver',
    'Pickup near me','Create a bussiness account','About Uber Eats','Save on your first order','English'];
    return (
        <div className="footer">
           <div id='footer'>
           <div className='apps'>
            <div id='app'>
                <div><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/69483074d137cc14cf3b62a50c0b2da3.svg" alt="" /></div>
                <div style={{display:'flex',gap:'10px'}}>
                    <div><img height='40px' src="	https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/3f9ab08ae56699b0acdd1f3adb635d19.svg" alt="" /></div>
                    <div><img height='40px' src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/de177aac4e55e6af701b71ea0dcd0d97.png" alt="" /></div>
                </div>
            </div>
            <div className='app2'>
                {footer.map((e, i)=>
                <div style={{color:'white'}} key={i}>{e}</div>)}
            </div>
          </div>
          <hr />
          <div className='dapp' style={{display:'flex',  justifyContent:'space-between',padding:'30px 0px 80px'}}>
              <div id='icons' style={{display:'flex',gap:'20px'}}>
                  <div><svg width='16px' aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="c9 ca bz cb"><path d="M14.667 0H1.333C.597 0 0 .597 0 1.333v13.334C0 15.403.597 16 1.333 16h7.334v-6h-2V7.333h2V5.61c0-2.067 1.262-3.192 3.106-3.192.883 0 1.642.066 1.863.095v2.16h-1.279c-1.002 0-1.196.477-1.196 1.176v1.485h2.96L13.454 10h-2.293v6h3.506c.736 0 1.333-.597 1.333-1.333V1.333C16 .597 15.403 0 14.667 0z" fill='white'></path></svg></div>
                  <div><svg width='16px'  aria-hidden="true" focusable="false" viewBox="0 0 14 12" className="c9 ca bz cb"><path fillRule="evenodd" clipRule="evenodd" d="M13.973 1.429a5.556 5.556 0 01-1.649.476A3.02 3.02 0 0013.587.231c-.554.34-1.169.59-1.823.728A2.792 2.792 0 009.668 0c-1.585 0-2.87 1.356-2.87 3.025 0 .24.026.47.074.692-2.385-.12-4.5-1.328-5.916-3.154-.249.443-.388.96-.388 1.522 0 1.051.507 1.976 1.276 2.52a2.754 2.754 0 01-1.3-.378v.036c0 1.467.988 2.692 2.302 2.97a2.776 2.776 0 01-1.29.052c.368 1.202 1.426 2.077 2.685 2.102A5.566 5.566 0 010 10.641 7.856 7.856 0 004.407 12c5.282 0 8.168-4.611 8.168-8.604 0-.13 0-.259-.01-.388.56-.424 1.05-.959 1.435-1.567l-.027-.012z" fill='white'></path></svg></div>
                  <div><svg width='16px'  aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="c9 ca bz cb"><path fillRule="evenodd" clipRule="evenodd" d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.908 3.908 0 00-1.417.923c-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372a3.908 3.908 0 001.417-.923c.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942a3.908 3.908 0 00-.923-1.417A3.886 3.886 0 0013.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28a2.49 2.49 0 01-.92-.6c-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04L8 1.44zm0 2.452a4.108 4.108 0 100 8.215 4.108 4.108 0 000-8.215zm0 6.775a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm5.23-6.937a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" fill='white'></path></svg></div>
              </div>
              <div className='down' style={{color:'white'}}>
                  <div style={{display:'flex', justifyContent:'end', gap:'30px', paddingBottom:'20px'}}>
                     <div>Privacy Policy</div>
                     <div>Terms</div>
                     <div>Pricing</div>
                     <div>Do not sell my info (California)</div>
                  </div>
                  <div style={{display:"flex", gap:'30px'}}></div>
              </div>
          </div>
           </div>
        </div>
    )
}