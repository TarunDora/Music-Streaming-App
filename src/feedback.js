const Feedback=()=>
        {
                return(
                    <div>
                        <fieldset>
                            <legend>FEEDBACK FORM</legend>
                            
                        <form>
                            <img src="img.png" alt="logo" align="right" height="100" width="100"/>
                            <table border="border" align='center' required="required">
                                <tr>
                                    <th>categories</th>
                                    
                                    <th>excellent</th>
                                    <th>good</th>
                                    <th>satisfactory</th>
                                    <th>poor</th>
                                    </tr>
                                <tr>
                                    <td required>how would you rate our app</td>
                                    <td required><input type="radio" name="1" required/></td>
                                    <td><input type="radio" name="1"/></td>
                                    <td><input type="radio" name="1"/></td>
                                    <td><input type="radio" name="1"/></td>
                                    </tr>
                                    <tr>
                                    <td required>how was the sound quality</td>
                                    <td><input type="radio" name="2" required/></td>
                                    <td><input type="radio" name="2"/></td>
                                    <td><input type="radio" name="2"/></td>
                                    <td><input type="radio" name="2"/></td>
                                    </tr>
                                    <tr>
                                    <td required>how was the video quality</td>
                                    <td><input type="radio" name="3" required/></td>
                                    <td><input type="radio" name="3"/></td>
                                    <td><input type="radio" name="3"/></td>
                                    <td><input type="radio" name="3"/></td>
                                    </tr>
                                    <tr>
                                    <td required>how was the user interface</td>
                                    <td><input type="radio" name="4" required/></td>
                                    <td><input type="radio" name="4"/></td>
                                    <td><input type="radio" name="4"/></td>
                                    <td><input type="radio" name="4"/></td>
                                    </tr>
                                    <tr>
                                    <td required>how were the playlist collections</td>
                                    <td><input type="radio" name="5" required/></td>
                                    <td><input type="radio" name="5"/></td>
                                    <td><input type="radio" name="5"/></td>
                                    <td><input type="radio" name="5"/></td>
                                    </tr>
                                </table><br/>
                                <textarea rows="3" cols="40" placeholder="please add any suggestions or comments" required></textarea><br/>
                                <button type="reset" value="reset" name="reset">reset</button>
                                <button type="submit" value="submit" name="submit">submit</button>
                            </form>
                            </fieldset>
                        </div>
                )
            }
        
        export default Feedback