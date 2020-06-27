import { Component, Types } from "ecsy"
import { GamepadInputTypes } from "../interfaces/InputTypes"

export default class GamepadInput extends Component<GamepadInputTypes> {
  connected: boolean
  axis_threshold: any
  dpadOneAxisX: number
  dpadTwoAxisX: number
  dpadOneAxisY: number
  dpadTwoAxisY: number
  buttonA: import("/home/beast/Documents/GitHub/ecsy-input/src/enums/ButtonState").default
  buttonB: import("/home/beast/Documents/GitHub/ecsy-input/src/enums/ButtonState").default
  buttonX: import("/home/beast/Documents/GitHub/ecsy-input/src/enums/ButtonState").default
  buttonY: import("/home/beast/Documents/GitHub/ecsy-input/src/enums/ButtonState").default
}

GamepadInput.schema = {
  axis_threshold: { type: Types.Number, default: 0.1 },
  connected: { type: Types.Boolean, default: false },
  dpadOneAxisY: { type: Types.Number },
  dpadOneAxisX: { type: Types.Number },
  dpadTwoAxisY: { type: Types.Number },
  dpadTwoAxisX: { type: Types.Number },
  buttonA: { type: Types.Boolean },
  buttonB: { type: Types.Boolean },
  buttonX: { type: Types.Boolean },
  buttonY: { type: Types.Boolean }
}