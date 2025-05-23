type HeaderAvatarProps = {
  src?: string;
}

export default function Avatar({ src }: HeaderAvatarProps) {
  return (<div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: src && `url(${src})` }}></div>);
}
