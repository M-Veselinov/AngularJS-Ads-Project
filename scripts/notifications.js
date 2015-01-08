/**
 * Created by Mario on 8.1.2015 г..
 */
function requestSuccessfull(msg) {
    noty({
            text: msg,
            type: 'success',
            layout: 'topCenter',
            timeout: 3000}
    );

}

function requestError(msg) {
    noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 3000}
    );
}