import Hello from '../Hello/Hello';
import About from '../About/About';
import Curriculum from '../Curriculum/Curriculum';
import Contact from '../Contact/Contact'
import SECTION_TYPES from '../../Constants/SectionType';

const componentRelations = {
  [SECTION_TYPES.HELLO]: Hello,
  [SECTION_TYPES.ABOUT]: About,
  [SECTION_TYPES.CURRICULUM]: Curriculum,
  [SECTION_TYPES.CONTACT]: Contact,
};

export default componentRelations;
