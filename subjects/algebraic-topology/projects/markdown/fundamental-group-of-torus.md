# Fundamental Group of the Torus via Seifert–van Kampen

## An End-to-End Metacognitive Mathematics Solution

**Problem:** AT-02 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Problem and Contract

> For the torus $T^2$, prove
>
> $$\pi_1(T^2)\cong\langle a,b\mid aba^{-1}b^{-1}=1\rangle\cong\mathbb Z^2.$$

The output is a fundamental-group presentation followed by an explicit group isomorphism. A drawing of two loops or the assertion that they commute is not a proof that these are all generators and relations.

**Definitions and imports:** a based loop is considered modulo based homotopy; multiplication is loop concatenation. Import $\pi_1(S^1)\cong\mathbb Z$, homotopy invariance, and Seifert–van Kampen for path-connected open sets with path-connected intersection. For such a cover, the theorem gives the group pushout: relations identify the two images of the intersection group. We explicitly construct the cover used for the torus's two-cell attachment.

## 2. Four-Agent Graph

```text
N1 Square and one-skeleton → N2 Free-group generators ─┐
N1 → N3 Two-cell cover and attaching relation ─────────┴→ N4 Quotient-to-Z² isomorphism
```

N3 also imports N2's identification of the one-skeleton group, so the relator is expressed in those generators.

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Cell model | Quotient square and orientations | Identify all four vertices | Separate one-skeleton and face | Read oriented boundary word | Fix torus geometry |
| N2 Generators | Circle group and van Kampen | Do not assume a and b commute | Use wedge-of-circles cover | Prove free group on two generators | Supply unfilled loop structure |
| N3 Relation | Open-cover pushout | Check open sets and connected intersection | Fill the two-cell | Derive normal closure of commutator | Account for filling |
| N4 Classification | Presentations and integer pairs | Prove no additional hidden relations | Construct inverse group maps | Verify both composites | Export exact group |

## 3. Full Node-by-Node Proof

### N1 — The Square Model and Its Boundary Word

Represent the torus by a square with opposite edges identified in the same direction. All four vertices become one vertex, and the horizontal and vertical edge pairs become loops a and b. The one-skeleton Y is the wedge $S^1\vee S^1$.

The remaining open square is one two-cell. Traversing its boundary counterclockwise gives horizontal a, vertical b, reverse horizontal a^(−1), and reverse vertical b^(−1). Hence its attaching loop is

$$w=aba^{-1}b^{-1}.$$

Changing consistent orientation conventions can invert or conjugate the word without changing its normal closure. Inconsistent conventions, however, can produce the wrong space.

### N2 — Compute the One-Skeleton Group

Cover the wedge by one open set containing the entire first circle and short arcs around the wedge point on the second, and a second set with the roles reversed. Each deformation retracts onto its full circle. Their intersection is a small cross-shaped tree around the common vertex, which is contractible and path connected.

Van Kampen therefore gives

$$\pi_1(Y)\cong\mathbb Z*\mathbb Z=F(a,b),$$

the free group on a and b. Before the face is filled, the generators do not commute; the commutator is a nontrivial reduced word in this free group.

### N3 — A Valid Open Cover for the Two-Cell Attachment

Write X for Y with the closed disk attached along w; this is the square model of the torus. Choose an interior center o of the attached disk.

Let U=X\{o}. This is open and deformation retracts onto Y: radially push each point in the punctured disk toward its boundary while fixing Y. Let V be a smaller open disk around o lying wholly inside the two-cell. It is open and contractible. These sets cover X. Their intersection is a punctured smaller disk, path connected, with fundamental group Z.

Choose a basepoint in that intersection and a path in U to the original vertex. A positive generator of the intersection group, transported to Y by the radial retraction, becomes w up to this basepoint conjugation. Its image in V is trivial because V is contractible.

Van Kampen identifies the U-image with the trivial V-image. Consequently

$$\pi_1(X)\cong F(a,b)/\langle\!\langle w\rangle\!\rangle,$$

where the double brackets mean the normal subgroup generated by w. Normal closure is required because the fundamental group relation also kills all conjugates of the attaching loop. This proves the stated presentation and shows that the single two-cell introduces exactly that normal relation.

### N4 — Identify the Presented Group with Integer Pairs

Let $P=\langle a,b\mid aba^{-1}b^{-1}=1\rangle$. The relation is equivalent to ab=ba. Define

$$\Phi:P\to\mathbb Z^2,\qquad\Phi(a)=(1,0),\quad\Phi(b)=(0,1).$$

It is well-defined because the commutator maps to zero in the abelian target. Define the opposite map

$$\Psi:\mathbb Z^2\to P,\qquad\Psi(m,n)=a^mb^n.$$

Since a and b commute, Psi respects addition: $a^mb^na^rb^s=a^{m+r}b^{n+s}$. Phi composed with Psi is the identity on integer pairs. Psi composed with Phi is the identity on the generators a,b and hence on all of P. Thus the maps are inverse isomorphisms. No extra relation between the integers remains.

Combining N1–N4 proves $\pi_1(T^2)\cong\mathbb Z^2$. $\square$

## 4. Worked Loop Trace

In the product model $T^2=S^1\times S^1$ with basepoint (1,1), define

$$\gamma_{m,n}(t)=(e^{2\pi imt},e^{2\pi int}),\qquad0\le t\le1.$$

Its class corresponds to (m,n). The coordinate projection maps send a to winding number 1 in the first circle and b to winding number 1 in the second, so they realize the same Phi constructed in N4.

| Loop word | Integer pair | Consequence |
|---|---|---|
| a | (1,0) | Horizontal generator |
| b | (0,1) | Vertical generator |
| a²b^(−1) | (2,−1) | Not null-homotopic |
| aba^(−1)b^(−1) | (0,0) | Killed by the attached face |
| a²b^(−1) followed by a^(−1)b³ | (1,2) | Concatenation becomes addition |

Because Phi is an isomorphism, a loop is null-homotopic exactly when both integer coordinates vanish. The zero-pair conclusion is supported by injectivity, not merely by observing two zero winding numbers.

## 5. Illustrative Messages

| Interaction | Mathematical evidence |
|---|---|
| N1 → N2 | One vertex and two oriented loop edges |
| N2 → N3 | Free group before attaching the face |
| N1 → N3 | Attaching word aba^(−1)b^(−1) |
| N3 → N4 | Quotient by the normal closure of that word |
| N4 → caller | Inverse homomorphisms with Z² |

The geometric and algebraic descriptions meet at the attaching relation. The final algebra node certifies a classification rather than guessing it from the picture.

## 6. Failure and Five-Faculty Repair

A failed branch abelianizes F(a,b) before accounting for the face, claiming that any two-loop graph has group Z².

```json
{"node":"N2","state":"STALLED","failing_faculty":"Action","failed_claim":"wedge group is Z squared","observed":"commutator is nontrivial reduced word before face attachment","repair_target":"cell-attachment dependency","blocked_export":"torus group without filling argument"}
```

Memory retrieves the free-product conclusion of van Kampen. Sense distinguishes the one-skeleton from the whole torus. Intellect restores the face-attachment branch. Action applies the valid open cover, imposes the normal commutator relation, and checks both inverse maps. Ego publishes Z² only after this dependency is satisfied.

## 7. Boundary Audit and Reusable Exports

A cover with disconnected intersection does not satisfy the stated version of van Kampen. Reading the face word as ab instead of the commutator changes the presentation and yields a different calculation. Homology abelianization alone cannot recover an arbitrary fundamental group; here the presentation proves that the full group itself is abelian.

Export the square cell model, free one-skeleton group, explicit attaching-relation calculation, and isomorphism with Z². The same cell structure supports the torus homology problem, where signed incidences give a different but compatible invariant.

## Evidence, Provenance, and Next Use

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [Allen Hatcher, Algebraic Topology, Chapter 1: van Kampen and cell attachments](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
