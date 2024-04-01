export class Appointment {
    $key: string;
    name: string;
    email: string;
    mobile: number;

    constructor($key: string, name: string, email: string, mobile: number) {
        this.$key = $key;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}