import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Perfil from './assets/perfil.svg';
import AboutUs from './assets/info.svg';
import Logout from './assets/logout.svg';

import './styles.css'

export default function Sidebar() {

    return (
        <aside>
            <img src={Logo} alt='LogoIcon' />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-public'>Publicar</a>
                    </li>
                    <li>
                        <a href="#" className='item__link item__link--ativo'>
                            <img src={Feed} alt="ImgFeed" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Perfil} alt="ImgPerfil" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={AboutUs} alt="ImgSobreNos" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Logout} alt="ImgLogout" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}