/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
import {
  ISignal
} from '@phosphor/signaling';


/**
 * The base interface for model db objects.
 */
export
interface IDBObject {
  /**
   * A signal emitted when the object changes.
   *
   * #### Notes
   * The changed signal is emitted asynchronously.
   */
  readonly changed: ISignal<this, IDBObject.ChangedArgs>;

  /**
   * The db type of the object.
   *
   * #### Complexity
   * Constant.
   */
  readonly dbType: string;

  /**
   * The unique db id of the object.
   *
   * #### Complexity
   * Constant.
   */
  readonly dbId: string;
}


/**
 * The namespace for the `IDBObject` interface statics.
 */
export
namespace IDBObject {
  /**
   * The type of the db object changed args.
   */
  export
  type ChangedArgs = {
    /**
     * The type of the changed args.
     */
    readonly type: string;

    /**
     * Whether the change was generated by an undo action.
     */
    readonly isUndo: boolean;

    /**
     * Whether the change was generated by a redo action.
     */
    readonly isRedo: boolean;

    /**
     * Whether the change was generated by the local application.
     */
    readonly isLocal: boolean;

    /**
     * The id of the user which generated the change.
     */
    readonly userId: string;

    /**
     * The id of the session which generated the change.
     */
    readonly sessionId: string;
  };
}
