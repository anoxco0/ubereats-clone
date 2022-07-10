import './bussiness.css'

export const Bussiness = ()=>{
    const bus = [
        {
            img:'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d68c5f5ddd33d16a8d6855987410673b.svg',
            title:'Feed your employees',
            linkDes:'Create a bussiness account',
            link:''
        },
        {
            img:'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f37288f1ff264310c703ea536190f79c.svg',
            title:'Your restaurent, delivered',
            linkDes:'Add your restaurant',
            link:''
        },
        {
            img:'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/43d9d02eb8ef72ff2029a296cfb91180.svg',
            title:'Deliver with uber Eats',
            linkDes:'Sign up to deliver',
            link:''
        }
    ]


    return (
        <div className='bussiness'>
            {bus.map((event,i)=>
                <div className="buss" key={i}>
                    <img src={event.img} alt="" />
                    <h1>{event.title}</h1>
                    <p>{event.linkDes}</p>
                </div>
            )}
        </div>
    )
}