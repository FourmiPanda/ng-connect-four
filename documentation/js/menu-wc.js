'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-connect-four documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-31acb0a9a809dfb5c41dd17ac31e7cb9651fd7ca917a431a111108ec9b436a79634da11864f1128a7256fe8086d4beabc2302c6c675e8e8582b82ee78f80935e"' : 'data-target="#xs-components-links-module-AppModule-31acb0a9a809dfb5c41dd17ac31e7cb9651fd7ca917a431a111108ec9b436a79634da11864f1128a7256fe8086d4beabc2302c6c675e8e8582b82ee78f80935e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-31acb0a9a809dfb5c41dd17ac31e7cb9651fd7ca917a431a111108ec9b436a79634da11864f1128a7256fe8086d4beabc2302c6c675e8e8582b82ee78f80935e"' :
                                            'id="xs-components-links-module-AppModule-31acb0a9a809dfb5c41dd17ac31e7cb9651fd7ca917a431a111108ec9b436a79634da11864f1128a7256fe8086d4beabc2302c6c675e8e8582b82ee78f80935e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GameModule-e755544bd788d02e1d15447baf5272d03cce5646d8e7a455372f9b763b0ef82cf31228c43584fdb54522c7767f507340be6ba5c48b28d8b1a3dd64694007e3c9"' : 'data-target="#xs-components-links-module-GameModule-e755544bd788d02e1d15447baf5272d03cce5646d8e7a455372f9b763b0ef82cf31228c43584fdb54522c7767f507340be6ba5c48b28d8b1a3dd64694007e3c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameModule-e755544bd788d02e1d15447baf5272d03cce5646d8e7a455372f9b763b0ef82cf31228c43584fdb54522c7767f507340be6ba5c48b28d8b1a3dd64694007e3c9"' :
                                            'id="xs-components-links-module-GameModule-e755544bd788d02e1d15447baf5272d03cce5646d8e7a455372f9b763b0ef82cf31228c43584fdb54522c7767f507340be6ba5c48b28d8b1a3dd64694007e3c9"' }>
                                            <li class="link">
                                                <a href="components/DiscComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EndGameDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndGameDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-48588f6c1ef7c6dd185b5784bdd5bf2c3f614b068ec4a71f8caa7117bf8a07bfb8f92988e12faae36cc9d52c32c44a4c6e5136c27cd938bbdb4372c029fdcdb2"' : 'data-target="#xs-components-links-module-HomeModule-48588f6c1ef7c6dd185b5784bdd5bf2c3f614b068ec4a71f8caa7117bf8a07bfb8f92988e12faae36cc9d52c32c44a4c6e5136c27cd938bbdb4372c029fdcdb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-48588f6c1ef7c6dd185b5784bdd5bf2c3f614b068ec4a71f8caa7117bf8a07bfb8f92988e12faae36cc9d52c32c44a4c6e5136c27cd938bbdb4372c029fdcdb2"' :
                                            'id="xs-components-links-module-HomeModule-48588f6c1ef7c6dd185b5784bdd5bf2c3f614b068ec4a71f8caa7117bf8a07bfb8f92988e12faae36cc9d52c32c44a4c6e5136c27cd938bbdb4372c029fdcdb2"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-316b4bb91993859d1c1ce64d6702e9e5b6e114ee280959f00aac1f044f87a2ffe53c45bc127e23ed11377314dac73aeca1ca8b87cefda814b6983871edb40265"' : 'data-target="#xs-components-links-module-SharedModule-316b4bb91993859d1c1ce64d6702e9e5b6e114ee280959f00aac1f044f87a2ffe53c45bc127e23ed11377314dac73aeca1ca8b87cefda814b6983871edb40265"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-316b4bb91993859d1c1ce64d6702e9e5b6e114ee280959f00aac1f044f87a2ffe53c45bc127e23ed11377314dac73aeca1ca8b87cefda814b6983871edb40265"' :
                                            'id="xs-components-links-module-SharedModule-316b4bb91993859d1c1ce64d6702e9e5b6e114ee280959f00aac1f044f87a2ffe53c45bc127e23ed11377314dac73aeca1ca8b87cefda814b6983871edb40265"' }>
                                            <li class="link">
                                                <a href="components/SettingsDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddDisc.html" data-type="entity-link" >AddDisc</a>
                            </li>
                            <li class="link">
                                <a href="classes/NextTurn.html" data-type="entity-link" >NextTurn</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetBoard.html" data-type="entity-link" >ResetBoard</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetBoard.html" data-type="entity-link" >SetBoard</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDarkMode.html" data-type="entity-link" >SetDarkMode</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetDiscColor.html" data-type="entity-link" >SetDiscColor</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetGameMode.html" data-type="entity-link" >SetGameMode</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetStaus.html" data-type="entity-link" >SetStaus</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppState.html" data-type="entity-link" >AppState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameState.html" data-type="entity-link" >GameState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppStateModel.html" data-type="entity-link" >AppStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GameStateModel.html" data-type="entity-link" >GameStateModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});