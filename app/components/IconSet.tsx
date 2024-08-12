import Image from 'next/image';
import PropTypes from 'prop-types';

interface Props{
    icons: string[];
}

// Mapeia os nomes para os caminhos das imagens
const imageMap: {[key: string]: string} = {
  html: '../../public/icon/html_icon.svg',
  css: '../../public/icon/css_icon.svg',
  js: '../../public/icon/js_icon.svg',
  // Adicione outras imagens conforme necessário
};

const IconSet: React.FC<Props> = ({ icons }) => {

  return (
    <div className="flex gap-1">
      {icons.map((icon) => {
        const src = imageMap[icon];
        if (!src) {
          console.warn(`Imagem não encontrada para o ícone: ${icon}`);
          return null; // Ignora se a imagem não estiver mapeada
        }
        return (
          <Image
            key={icon}
            src={src}
            alt={icon}
            height={20}
            width={20}
            
          />
        );
      })}
    </div>
  );
};

// IconSet.propTypes = {
//   icons: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default IconSet;