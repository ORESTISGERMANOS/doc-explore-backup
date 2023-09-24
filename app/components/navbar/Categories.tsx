'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {  
  GiBowieKnife, 
  GiBrainStem, 
  GiCancer, 
  GiHealing, 
  GiKidneys,
  GiScarWound,
  GiStomach,
  GiSyringe,
  GiVikingShield,
} from 'react-icons/gi';
import { FaBabyCarriage } from 'react-icons/fa';
import { BsEmojiDizzy, BsFillArrowThroughHeartFill, BsFillLungsFill, BsFillSuitHeartFill, BsPersonFillExclamation, BsShieldShaded } from 'react-icons/bs';
import { IoDiamond, IoEarSharp } from 'react-icons/io5';
import { MdBloodtype } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { BiSolidBone, BiSolidBrain } from 'react-icons/bi';
import { AiFillEye, AiOutlineMan, AiOutlineScan, AiOutlineWoman } from 'react-icons/ai';


export const categories = [
  {
    label: 'Dermatology',
    icon: BsPersonFillExclamation,
    description: 'This property is has windmills!',
  },
  {
    label: 'Gastroenterology',
    icon: GiStomach,
    description: 'This property is modern!'
  },
  {
    label: 'Gynaecology',
    icon: AiOutlineWoman,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Psychiatry',
    icon: BsEmojiDizzy,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Oncology',
    icon: GiCancer,
    description: 'This property is on an island!'
  },
  {
    label: 'Pathology',
    icon: GiHealing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Plastic Surgery',
    icon: GiScarWound,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Urology',
    icon: AiOutlineMan,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Ophthalmology',
    icon: AiFillEye,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Anesthesiology',
    icon: GiSyringe,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Pediatrics',
    icon: FaBabyCarriage,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Neurologist',
    icon: BiSolidBrain,
    description: 'This property is in the desert!'
  },
  {
    label: 'Nephrologist',
    icon: GiKidneys,
    description: 'This property is in a barn!'
  },
  {
    label: 'Cardiologist',
    icon: BsFillSuitHeartFill,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Otorynolaryngology',
    icon: IoEarSharp,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Radiology',
    icon: AiOutlineScan,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'General Surgery',
    icon: GiBowieKnife,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Cardiothoracic surgery',
    icon: BsFillArrowThroughHeartFill,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Neurosurgery',
    icon: GiBrainStem,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Orthopaedic Surgery',
    icon: BiSolidBone,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Rheumatology',
    icon: GiVikingShield,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Immunology',
    icon: BsShieldShaded,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Endocrinology',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Hematology',
    icon: MdBloodtype,
    description: 'This property is brand new and luxurious!'
  },
  {
    label: 'Respirology',
    icon: BsFillLungsFill,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;