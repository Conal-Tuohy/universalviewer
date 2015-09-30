class Commands {
    static namespace: string = 'uv.';

    static AUTHORIZATION_OCCURRED: string           = Commands.namespace + 'onAuthorizationOccurred';
    static CANVAS_INDEX_CHANGE_FAILED: string       = Commands.namespace + 'onCanvasIndexChangeFailed';
    static CANVAS_INDEX_CHANGED: string             = Commands.namespace + 'onCanvasIndexChanged';
    static CLICKTHROUGH_OCCURRED: string            = Commands.namespace + 'onClickthroughOccurred';
    static CLOSE_ACTIVE_DIALOGUE: string            = Commands.namespace + 'onCloseActiveDialogue';
    static CLOSE_LEFT_PANEL: string                 = Commands.namespace + 'onCloseLeftPanel';
    static CLOSE_RIGHT_PANEL: string                = Commands.namespace + 'onCloseRightPanel';
    static CREATED: string                          = Commands.namespace + 'onCreated';
    static DOWN_ARROW: string                       = Commands.namespace + 'onDownArrow';
    static DOWNLOAD: string                         = Commands.namespace + 'onDownload';
    static DROP: string                             = Commands.namespace + 'onDrop';
    static EMBED: string                            = Commands.namespace + 'onEmbed';
    static END: string                              = Commands.namespace + 'onEnd';
    static ESCAPE: string                           = Commands.namespace + 'onEscape';
    static HIDE_DOWNLOAD_DIALOGUE: string           = Commands.namespace + 'onHideDownloadDialogue';
    static HIDE_EMBED_DIALOGUE: string              = Commands.namespace + 'onHideEmbedDialogue';
    static HIDE_EXTERNALCONTENT_DIALOGUE: string    = Commands.namespace + 'onHideExternalContentDialogue';
    static HIDE_GENERIC_DIALOGUE: string            = Commands.namespace + 'onHideGenericDialogue';
    static HIDE_HELP_DIALOGUE: string               = Commands.namespace + 'onHideHelpDialogue';
    static HIDE_INFORMATION: string                 = Commands.namespace + 'onHideInformation';
    static HIDE_OVERLAY: string                     = Commands.namespace + 'onHideOverlay';
    static HIDE_SETTINGS_DIALOGUE: string           = Commands.namespace + 'onHideSettingsDialogue';
    static HOME: string                             = Commands.namespace + 'onHome';
    static LEFT_ARROW: string                       = Commands.namespace + 'onLeftArrow';
    static LEFTPANEL_COLLAPSE_FULL_FINISH: string   = Commands.namespace + 'onLeftPanelCollapseFullFinish';
    static LEFTPANEL_COLLAPSE_FULL_START: string    = Commands.namespace + 'onLeftPanelCollapseFullStart';
    static LEFTPANEL_EXPAND_FULL_FINISH: string     = Commands.namespace + 'onLeftPanelExpandFullFinish';
    static LEFTPANEL_EXPAND_FULL_START: string      = Commands.namespace + 'onLeftPanelExpandFullStart';
    static LOAD: string                             = Commands.namespace + 'onLoad';
    static NOT_FOUND: string                        = Commands.namespace + 'onNotFound';
    static OPEN_LEFT_PANEL: string                  = Commands.namespace + 'onOpenLeftPanel';
    static OPEN_EXTERNAL_RESOURCE: string           = Commands.namespace + 'onOpenExternalResource';
    static OPEN_RIGHT_PANEL: string                 = Commands.namespace + 'onOpenRightPanel';
    static PAGE_DOWN: string                        = Commands.namespace + 'onPageDown';
    static PAGE_UP: string                          = Commands.namespace + 'onPageUp';
    static REDIRECT: string                         = Commands.namespace + 'onRedirect';
    static REFRESH: string                          = Commands.namespace + 'onRefresh';
    static RESIZE: string                           = Commands.namespace + 'onResize';
    static RESOURCE_DEGRADED: string                = Commands.namespace + 'onResourceDegraded';
    static RETURN: string                           = Commands.namespace + 'onReturn';
    static RIGHT_ARROW: string                      = Commands.namespace + 'onRightArrow';
    static RIGHTPANEL_COLLAPSE_FULL_FINISH: string  = Commands.namespace + 'onRightPanelCollapseFullFinish';
    static RIGHTPANEL_COLLAPSE_FULL_START: string   = Commands.namespace + 'onRightPanelCollapseFullStart';
    static RIGHTPANEL_EXPAND_FULL_FINISH: string    = Commands.namespace + 'onRightPanelExpandFullFinish';
    static RIGHTPANEL_EXPAND_FULL_START: string     = Commands.namespace + 'onRightPanelExpandFullStart';
    static SEQUENCE_INDEX_CHANGED: string           = Commands.namespace + 'onSequenceIndexChanged';
    static SETTINGS_CHANGED: string                 = Commands.namespace + 'onSettingsChanged';
    static SHOW_CLICKTHROUGH_DIALOGUE: string       = Commands.namespace + 'onShowClickThroughDialogue';
    static SHOW_DOWNLOAD_DIALOGUE: string           = Commands.namespace + 'onShowDownloadDialogue';
    static SHOW_EMBED_DIALOGUE: string              = Commands.namespace + 'onShowEmbedDialogue';
    static SHOW_EXTERNALCONTENT_DIALOGUE: string    = Commands.namespace + 'onShowExternalContentDialogue';
    static SHOW_GENERIC_DIALOGUE: string            = Commands.namespace + 'onShowGenericDialogue';
    static SHOW_HELP_DIALOGUE: string               = Commands.namespace + 'onShowHelpDialogue';
    static SHOW_INFORMATION: string                 = Commands.namespace + 'onShowInformation';
    static SHOW_LOGIN_DIALOGUE: string              = Commands.namespace + 'onShowLoginDialogue';
    static SHOW_OVERLAY: string                     = Commands.namespace + 'onShowOverlay';
    static SHOW_SETTINGS_DIALOGUE: string           = Commands.namespace + 'onShowSettingsDialogue';
    static THUMB_SELECTED: string                   = Commands.namespace + 'onThumbSelected';
    static TOGGLE_FULLSCREEN: string                = Commands.namespace + 'onToggleFullScreen';
    static UP_ARROW: string                         = Commands.namespace + 'onUpArrow';
    static UPDATE_SETTINGS: string                  = Commands.namespace + 'onUpdateSettings';
    static VIEW_FULL_TERMS: string                  = Commands.namespace + 'onViewFullTerms';
    static WINDOW_UNLOAD: string                    = Commands.namespace + 'onWindowUnload';
}

export = Commands;