import { Component } from "@stencil/core";

@Component({
    tag: 'yoo-spinner',
    styleUrl:'./spinner.css',
    shadow: true
})
export class Spinner{
    render() {
        return (
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}