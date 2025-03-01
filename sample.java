import javax.swing.*;
import java.awt.*;

class Sample{

    public static void main(String args[]){
        System.out.println("HI");
        JFrame jf = new JFrame();
        JButton ja = new JButton("HI I am Aniket");
        jf.setLayout(new GridLayout(2,3));
        jf.add(ja);
        jf.setSize(200,200);
        jf.setVisible(true);
    }
}