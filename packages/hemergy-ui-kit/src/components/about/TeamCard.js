import Image from 'next/image';
import Link from 'next/link';

const TeamCard = () => {
  return (
    <div className="team-card">
      <div className="card-body">
        <div className="mt-6">
          <Image
            src="/images/about_team_1.svg"
            width={144}
            height={144}
            alt="rating"
          />
        </div>
        <div className="max-w-[240px]">
          <h5 className="mt-6 font-semibold text-[20px] m-0 text-textcolor font-Poppins">
            Ahmed Belabdia
          </h5>
          <h6 className="mt-6 font-semibold text-[16px] m-0 text-textcolor font-Poppins">
            Founder
          </h6>
          <p className="mt-6 font-normal text-[14px] leading-[21px] m-0 text-textcolor font-Poppins">
            Former engineer at Natixis Payments...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
