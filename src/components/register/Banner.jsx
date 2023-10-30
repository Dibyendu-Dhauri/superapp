
import bannerImg from '../../assets/banner.svg'
export default function Banner() {
  return (
    <div className="w-1/2 relative ">
        <img src={bannerImg} alt='banner' />
        <div className="absolute top-[50.31rem] left-[3.88rem] text-[3.44rem] tracking-[0.02em] leading-[141.69%] font-black font-roboto text-white inline-block w-[43.44rem] h-[8.94rem]">
        Discover new things on Superapp
      </div>
        </div>
  )
}
