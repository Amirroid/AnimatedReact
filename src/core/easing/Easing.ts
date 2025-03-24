export default class Easing {
    private constructor(public value: string) { }

    static readonly Linear = new Easing("linear");
    static readonly EaseIn = new Easing("ease-in");
    static readonly EaseOut = new Easing("ease-out");
    static readonly EaseInOut = new Easing("ease-in-out");
    static readonly EnterDefault = this.EaseIn;
    static readonly ExitDefault = this.EaseOut;

    toString() {
        return this.value;
    }
}