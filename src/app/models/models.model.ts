export class Perfil {
  public usuario?: string;
  public src?: string;
  public usr?: string;
}

export class Midia {
  constructor(
    public titulo: string,
    public src: string,
    public ano: string,
    public duracao: string
  ) {}
}
