import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Write = ({ input, setInput, boardList, setBoardList, id }) => {
    return (
        <div className='BoardList'>
            <table className='BoardTable'>
                <thead>
                    <tr>
                        <td colSpan={2}>
                            <h3>write</h3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='title'>name</td>

                    </tr>
                    <tr>
                        <td className='title'>title</td>

                    </tr>
                    <tr>
                        <td className='title'>content</td>

                    </tr>
                </tbody>
            </table>
            <div className="BtnGroup">

            </div>
        </div>
    )
}

export default Write;