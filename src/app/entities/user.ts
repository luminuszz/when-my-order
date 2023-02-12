interface UserProps {
  name: string;
  email: string;
  id: string;
}

export class User {
  public name: string;
  public email: string;
  public id: string;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.id = props.id;
  }
}
