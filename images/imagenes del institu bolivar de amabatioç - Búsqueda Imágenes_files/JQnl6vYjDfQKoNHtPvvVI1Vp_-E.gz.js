var VRHEnums,VRHConsts;(function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k;(function(n){n[n.ST=1]="ST";n[n.MT=2]="MT";n[n.MST=3]="MST";n[n.MMST=4]="MMST";n[n.MMMT=5]="MMMT"})(t=n.ThumbnailType||(n.ThumbnailType={})),function(n){n[n.Loading=1]="Loading";n[n.Playing=2]="Playing";n[n.Stopped=3]="Stopped";n[n.Paused=4]="Paused";n[n.Error=5]="Error";n[n.None=6]="None"}(i=n.PlayerStatus||(n.PlayerStatus={})),function(n){n[n.Algo=0]="Algo";n[n.Adult=1]="Adult"}(r=n.HoveredElementType||(n.HoveredElementType={})),function(n){n[n.NormalPageOffset=0]="NormalPageOffset";n[n.IOSDevicePageOffset=1]="IOSDevicePageOffset"}(u=n.ClientOffsetTypeOptions||(n.ClientOffsetTypeOptions={})),function(n){n[n.MouseTrigger=0]="MouseTrigger";n[n.AutoplayTrigger=1]="AutoplayTrigger";n[n.TabTrigger=2]="TabTrigger";n[n.HoverLoopPlayTrigger=3]="HoverLoopPlayTrigger";n[n.ManualTrigger=4]="ManualTrigger";n[n.VisibleAutoPlayTrigger=5]="VisibleAutoPlayTrigger"}(f=n.TriggerType||(n.TriggerType={})),function(n){n[n.Top=0]="Top";n[n.Middle=1]="Middle"}(e=n.HoverVerticalAlignType||(n.HoverVerticalAlignType={})),function(n){n[n.Target=0]="Target";n[n.Boundary=1]="Boundary";n[n.PlayerBoundary=2]="PlayerBoundary";n[n.MMSTBoundary=3]="MMSTBoundary";n[n.CaptionSource=4]="CaptionSource";n[n.CaptionTarget=5]="CaptionTarget";n[n.LinkTarget=6]="LinkTarget";n[n.ScaleCanvas=7]="ScaleCanvas";n[n.DuplicateSource=8]="DuplicateSource";n[n.DuplicateTarget=9]="DuplicateTarget"}(o=n.HoverTargetType||(n.HoverTargetType={})),function(n){n[n.BackgroundPlay=0]="BackgroundPlay";n[n.HoverPlay=1]="HoverPlay";n[n.HoverLoopPlay=2]="HoverLoopPlay";n[n.Null=3]="Null"}(s=n.HoverPlayType||(n.HoverPlayType={})),function(n){n[n.OnLoad=0]="OnLoad"}(h=n.TransformationTriggerType||(n.TransformationTriggerType={})),function(n){n[n.MouseMove=0]="MouseMove";n[n.MouseOver=1]="MouseOver"}(c=n.HoverMouseTriggerEvent||(n.HoverMouseTriggerEvent={})),function(n){n.Loaded="hover-iframe-loaded";n.PreviewStarted="hover-iframe-ps";n.Click="hover-iframe-click";n.Scroll="hover-iframe-scroll"}(l=n.IframeMessage||(n.IframeMessage={})),function(n){n[n.None=0]="None";n[n.Horizontal=1]="Horizontal";n[n.Vertical=2]="Vertical";n[n.Both=3]="Both"}(a=n.ScrollingDirection||(n.ScrollingDirection={})),function(n){n[n.None=0]="None";n[n.OnPageLoad=1]="OnPageLoad";n[n.OnPageloadWithAutoPlayNext=2]="OnPageloadWithAutoPlayNext";n[n.OnVisible=3]="OnVisible";n[n.OnVisibleWithAutoPlayNext=4]="OnVisibleWithAutoPlayNext"}(v=n.AutoPlayType||(n.AutoPlayType={})),function(n){n[n.Cleanup=0]="Cleanup";n[n.Reset=1]="Reset"}(y=n.PlayerEndAction||(n.PlayerEndAction={})),function(n){n[n.Inline=0]="Inline";n[n.PopOut=1]="PopOut";n[n.MouseFollow=2]="MouseFollow"}(p=n.HoverInteractionType||(n.HoverInteractionType={})),function(n){n[n.PlayerMouseMove=0]="PlayerMouseMove";n[n.PlayerClick=1]="PlayerClick";n[n.CaptionMouseMove=2]="CaptionMouseMove"}(w=n.TriggerEvent||(n.TriggerEvent={})),function(n){n[n.ReplayPlayer=0]="ReplayPlayer";n[n.TogglePlayerPlayAndPause=1]="TogglePlayerPlayAndPause"}(b=n.EventHandler||(n.EventHandler={})),function(n){n[n.Border=0]="Border";n[n.Content=1]="Content"}(k=n.OffsetBoundaryType||(n.OffsetBoundaryType={}))})(VRHEnums||(VRHEnums={})),function(n){var t;n.CaptionHideEvt="Vi.Caption.H";n.CaptionShowEvt="Vi.Caption.S";n.MMSTSeekEvt="Vi.MMST.Seek";n.HoverAsyncBindEvt="Vi.AsyncBind.H";n.PlayerStartEvt="Vi.Player.S";n.PlayerEndEvt="Vi.Player.E";n.PlayerErrEvt="Vi.Player.Err";n.PlayerPauseEvt="Vi.Player.PAUSE";n.PlayerResetEvt="Vi.Player.Res";n.PlayerReplayEvt="Vi.Player.Replay";n.PlayerLoadEvt="Vi.Player.L";n.PlayerDownloadEndEvt="Vi.Player.DF";n.PlayerPBUpdateEvt="Vi.Player.PU";n.PlayerDataLoadEndEvt="Vi.Player.DL";n.SetVideoVolEvt="Vi.Player.SV";n.MuteVideoEvt="Vi.Player.Mute";n.StopPlayEvt="Vi.Player.Stop";n.TogglePlayerStatusEvt="Vi.Player.Tg";n.HoverReadyEvt="Vi.VideoHover.Init";n.HoverCleanupEvt="Vi.Hover.Clean";n.HoverEnableEvt="Vi.Hover.Enable";n.HoverDisableEvt="Vi.Hover.Disable";n.HoverClickedEvt="Vi.Hover.Clicked";n.HoverViewPortUpdateEvt="Vi.Hover.VPUpdate";n.FallbackToNonSMTEvt="Vi.Hover.NotSMT";n.HoverMouseInEvt="Vi.Hover.MouseIn";n.HoverManualTriggerEvt="Vi.Hover.MT";n.HoverStartEvt="Vi.Hover.Start";n.HoverStopEvt="Vi.Hover.Stop";n.HoverMouseOutEvt="Vi.Hover.MouseOut";n.HoverContainerReadyEvt="Vi.Hover.Crd";n.HoverContainerDisplayEvt="Vi.Hover.Cds";n.HoverThumbLoadEvt="Vi.Hover.ThLoad";n.HoverMMSTLoadEvt="Vi.Hover.MMSTLoad";n.HoverMMSTShowEvt="Vi.Hover.MMSTShow";n.HoverMMSTHideEvt="Vi.Hover.MMSTHide";n.HoverCaptionLoadEvt="Vi.Hover.CLoad";n.HoverCaptionHUpdateEvt="Vi.Hover.CHUpdate";n.HoverCancelEvt="Vi.Hover.Cancel";n.Hover2SEvt="Vi.Hover.2Sec";n.Hover5SEvt="Vi.Hover.5Sec";n.Hover10SEvt="Vi.Hover.10Sec";n.HoverChannelFilterEvt="Vi.Hover.Chlf";n.HoverDisplay="Vi.Hover.Display";n.HoverMuteEvt="Vi.Hover.Mute";n.AutoPlayNext="Vi.Hover.AutoPlayNext";n.AutoPlayNextStatusUpdateEvt="Vi.Hover.APNextStatus";n.AutoPlayReset="Vi.Hover.AutoPlayReset";n.OverlaySizeUpdateEvt="Vi.Hover.OSUpdate";n.HoverBoundaryScaleEvt="Vi.Hover.Scale";n.UnloadHover="Vi.Hover.Unload";n.BoundarySizePersistedAttachedStr="bspatt";n.BoundarySizeScaleAttachedStr="bssatt";n.TabHoverBehaviorAttachedStr="thbatt";n.HoverContainerTemplateIdAttribute="data-hctid";n.HoverDisabledClassName="vrhdis";n.HoverStatusMessageContainerClassName="vrhstat";n.HoverThumbnailOutOfViewPortClassName="tpc_out";n.IframeLoadedEvt="Hover.If.Loaded";n.IframeScrollEvt="Hover.If.Scroll";n.MouseRightMargin=15;n.MouseBottomMargin=25;n.MouseTopMargin=7;n.AutoPlayVisibilityThreshold=.5;n.PlayerStatusClassName=(t={},t[VRHEnums.PlayerStatus.Loading]="load",t[VRHEnums.PlayerStatus.Playing]="",t[VRHEnums.PlayerStatus.Stopped]="",t[VRHEnums.PlayerStatus.Paused]="paused",t[VRHEnums.PlayerStatus.Error]="",t[VRHEnums.PlayerStatus.None]="",t);n.DefaultInstrumentationContentConfigs=[{tm:2e3,sin:"d2"},{tm:5e3,sin:"d5"},{tm:1e4,sin:"d10"}]}(VRHConsts||(VRHConsts={}))