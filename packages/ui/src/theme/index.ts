import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
// Foundational available https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
import sizes from './foundations/sizes';
import textStyles from './foundations/text-styles';
import colors from './foundations/colors';

// Single Part Component style overrides
import Accordion from './components/accordion';
import Button from './components/button';
import Heading from './components/heading';
import Card from './components/card';
import HeaderNav from './components/header-nav';
import Text from './components/text';
import Link from './components/link';
import SideBar from './components/sidebar';
import MenuQuestionnaire from './components/menu-questionnaire';
import Menu from './components/menu';
import Modal from './components/modal';
import NotificationCard from './components/notification-card';
import RegistrationCard from './components/registration-card';
import StickyProgress from './components/sticky-progress';
import InputFileUploader from './components/input-file-uploader';
import ChooseFileUploader from './components/choose-file-uploader';
import FileRadioCard from './components/file-radio-card';
import Form from './components/form';
import Input from './components/input';
import Select from './components/select';
import FormLabel from './components/form-label';
import Textarea from './components/textarea';
import FormError from './components/form-error';
import SearchFilterBar from './components/search-filter-bar';
import Tag from './components/tag';
import TooltipText from './components/tooltip-text';
import ApplicationCard from './components/application-card';
import Tabs from './components/tabs';
import GenericToast from './components/generic-toast';
import Alert from './components/alert';
import Skeleton from './components/skeleton';
import StatusTimeline from './components/status-timeline';
import ConfirmationDialog from './components/confirmation-dialog';
import App from './components/app';
import Utils from './components/utils';
import Checkbox from './components/checkbox';
import { breakpoints } from '../constants';
import ModalFeatureMapping from './components/modal-feature-mapping';
import Avatar from './components/avatar';
import Popover from './components/popover';
import Switch from './components/switch';
import Progress from './components/progress';
import LanguageSelector from './components/language-selector';

const overrides = {
  styles,
  sizes,
  textStyles,
  colors,
  breakpoints,
  // foundational style overrides go here
  components: {
    Accordion,
    Button,
    Heading,
    Card,
    HeaderNav,
    Text,
    Link,
    SideBar,
    MenuQuestionnaire,
    NotificationCard,
    InputFileUploader,
    ChooseFileUploader,
    FileRadioCard,
    RegistrationCard,
    StickyProgress,
    Form,
    Input,
    Select,
    FormLabel,
    Textarea,
    FormError,
    SearchFilterBar,
    Tag,
    TooltipText,
    ApplicationCard,
    Tabs,
    GenericToast,
    Alert,
    Skeleton,
    StatusTimeline,
    ConfirmationDialog,
    App,
    Menu,
    Modal,
    Avatar,
    Utils,
    Checkbox,
    ModalFeatureMapping,
    Popover,
    Switch,
    Progress,
    LanguageSelector,
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
